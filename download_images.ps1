$baseUrl = "https://findlead.ai/assets/images/"
$outputDir = "public/images"

# Ensure output directory exists
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$images = @(
    @{ Url = "logo.png"; Output = "logo.png" },
    @{ Url = "footer-logo.png"; Output = "footer-logo.png" },
    @{ Url = "home-banner1.png"; Output = "hero-hook.png" },
    @{ Url = "banner-sub.png"; Output = "hero-subtitle.png" },
    @{ Url = "one-platform.png"; Output = "dashboard-main.png" },
    @{ Url = "accessible.png"; Output = "dashboard-accessible.png" },
    @{ Url = "notification.png"; Output = "dashboard-notification.png" },
    @{ Url = "industry.png"; Output = "dashboard-industry.png" },
    @{ Url = "contact.png"; Output = "dashboard-contact.png" },
    @{ Url = "abm.png"; Output = "feature-abm.png" },
    @{ Url = "Mask%20group.png"; Output = "feature-mask.png" },
    @{ Url = "soend1.png"; Output = "avatar-1.png" },
    @{ Url = "spend2.png"; Output = "avatar-2.png" },
    @{ Url = "spend3.png"; Output = "avatar-3.png" },
    @{ Url = "spend4.png"; Output = "avatar-4.png" },
    @{ Url = "icon1.png"; Output = "icon-1.png" },
    @{ Url = "icon2.png"; Output = "icon-2.png" },
    @{ Url = "icon3.png"; Output = "icon-3.png" },
    @{ Url = "icon4.png"; Output = "icon-4.png" },
    @{ Url = "icon5.png"; Output = "icon-5.png" },
    @{ Url = "amz.png"; Output = "partner-amazon.png" },
    @{ Url = "mcrsft.png"; Output = "partner-microsoft.png" },
    @{ Url = "oyo.png"; Output = "partner-oyo.png" },
    @{ Url = "relin.png"; Output = "partner-reliance.png" },
    @{ Url = "rzrpay.png"; Output = "partner-razorpay.png" },
    @{ Url = "ug.png"; Output = "partner-ug.png" },
    @{ Url = "ad.png"; Output = "partner-ad.png" },
    @{ Url = "blue-bg.png"; Output = "bg-card-blue.png" },
    @{ Url = "light-blue.png"; Output = "bg-card-light-blue.png" },
    @{ Url = "yellow.png"; Output = "bg-card-yellow.png" },
    @{ Url = "dark-blue.png"; Output = "bg-card-dark-blue.png" },
    @{ Url = "rewards-bg.png"; Output = "bg-rewards.png" },
    @{ Url = "subscribe-bg.png"; Output = "bg-subscribe.png" },
    @{ Url = "right-bg.png"; Output = "bg-right-panel.png" },
    @{ Url = "arrow.png"; Output = "ui-arrow.png" },
    @{ Url = "eye.png"; Output = "ui-eye.png" },
    @{ Url = "play.png"; Output = "ui-play.png" }
)

foreach ($img in $images) {
    $url = $baseUrl + $img.Url
    $outputPath = Join-Path $outputDir $img.Output
    Write-Host "Downloading $url to $outputPath"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
    } catch {
        Write-Error "Failed to download $url : $_"
    }
}
