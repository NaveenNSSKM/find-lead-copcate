const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const fs = require('fs');
// Use a simple manual parser instead of dotenv

const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function diagnostic() {
    console.log('Testing Supabase connection...');
    console.log('URL:', supabaseUrl);

    // 1. Try to list tables from information_schema (requires service_role)
    const { data: tables, error: tablesError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public');

    if (tablesError) {
        console.log('Could not query information_schema. Trying direct table checks...');
        console.error('Error:', tablesError.message);
    } else {
        console.log('Found tables in public schema:', tables.map(t => t.table_name).join(', '));
    }

    // 2. Try common table names directly anyway
    const commonNames = ['findlead-ai-blog', 'blog', 'posts', 'blog_posts'];
    for (const name of commonNames) {
        const { count, error } = await supabase
            .from(name)
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.log(`Table '${name}': Error - ${error.message}`);
        } else {
            console.log(`Table '${name}': Success! Found ${count} rows.`);
            if (count > 0 && name === 'findlead-ai-blog') {
                const { data } = await supabase.from(name).select('*').limit(1);
                console.log('Sample row structure:', JSON.stringify(data[0], null, 2));
            }
        }

    }
}

diagnostic();
