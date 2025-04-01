$imageUrls = @(
    "https://www.onlinegames.io/media/posts/520/responsive/Crazy-Hill-Climb-xs.jpg",
    "https://www.onlinegames.io/media/posts/762/responsive/Racing-Cars-2-xs.jpg",
    "https://www.onlinegames.io/media/posts/648/responsive/Hill-Climb-Cars-xs.jpg",
    "https://www.onlinegames.io/media/posts/497/responsive/Formula-1-Driver-xs.jpg",
    "https://www.onlinegames.io/media/posts/553/responsive/Drift-Rider-xs.jpg",
    "https://www.onlinegames.io/media/posts/484/responsive/Tank-Racing-Online-xs.jpg",
    "https://www.onlinegames.io/media/posts/661/responsive/Racing-Cars-xs.jpg",
    "https://www.onlinegames.io/media/posts/924/responsive/monster-truck-mountain-climb-xs.jpg",
    "https://www.onlinegames.io/media/posts/826/responsive/Monster-Truck-Racing-xs.jpg"
)

# Create images directory if it doesn't exist
if (-not (Test-Path -Path "images")) {
    New-Item -ItemType Directory -Path "images" | Out-Null
    Write-Host "Created directory: images"
}

# Download each image
foreach ($url in $imageUrls) {
    $fileName = $url.Split("/")[-1]
    $outputPath = Join-Path -Path "images" -ChildPath $fileName
    
    Write-Host "Downloading $fileName..."
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Downloaded to $outputPath"
    } catch {
        Write-Host "Failed to download $fileName: $_"
    }
}

Write-Host "All downloads completed!" 