# Database Setup Script for Peanech Real Estate
# This script creates the database and imports the schema

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Peanech Real Estate - Database Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$DBHost = "localhost"
$DBUser = "root"
$DBName = "peanech_estate"
$SchemaFile = ".\database\schema.sql"
$SetupFile = ".\database\setup-database.sql"

# Check if MySQL is accessible
Write-Host "Checking MySQL connection..." -ForegroundColor Yellow
$mysqlPath = Get-Command mysql -ErrorAction SilentlyContinue

if (-not $mysqlPath) {
  Write-Host "ERROR: MySQL command not found in PATH" -ForegroundColor Red
  Write-Host "Please ensure MySQL is installed and added to your system PATH" -ForegroundColor Red
  Write-Host ""
  Write-Host "If using Laragon, try:" -ForegroundColor Yellow
  Write-Host "  `$env:PATH += ';C:\laragon\bin\mysql\mysql-8.x.x-winx64\bin'" -ForegroundColor Cyan
  exit 1
}

Write-Host "✓ MySQL found at: $($mysqlPath.Source)" -ForegroundColor Green
Write-Host ""

# Prompt for password
Write-Host "Enter MySQL root password (press Enter if no password):" -ForegroundColor Yellow
$DBPassword = Read-Host -AsSecureString
$PlainPassword = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($DBPassword)
)

Write-Host ""
Write-Host "Step 1: Creating database..." -ForegroundColor Yellow

# Create database
$createDbCmd = "CREATE DATABASE IF NOT EXISTS $DBName CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
if ($PlainPassword) {
  echo $createDbCmd | mysql -h $DBHost -u $DBUser -p"$PlainPassword" 2>&1
}
else {
  echo $createDbCmd | mysql -h $DBHost -u $DBUser 2>&1
}

if ($LASTEXITCODE -eq 0) {
  Write-Host "✓ Database '$DBName' created successfully" -ForegroundColor Green
}
else {
  Write-Host "✗ Failed to create database" -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Step 2: Importing schema..." -ForegroundColor Yellow

# Import schema
if (Test-Path $SchemaFile) {
  if ($PlainPassword) {
    Get-Content $SchemaFile | mysql -h $DBHost -u $DBUser -p"$PlainPassword" $DBName 2>&1
  }
  else {
    Get-Content $SchemaFile | mysql -h $DBHost -u $DBUser $DBName 2>&1
  }

  if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Schema imported successfully" -ForegroundColor Green
  }
  else {
    Write-Host "✗ Failed to import schema" -ForegroundColor Red
    exit 1
  }
}
else {
  Write-Host "✗ Schema file not found: $SchemaFile" -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Step 3: Verifying tables..." -ForegroundColor Yellow

# Verify tables
$showTablesCmd = "USE $DBName; SHOW TABLES;"
if ($PlainPassword) {
  $tables = echo $showTablesCmd | mysql -h $DBHost -u $DBUser -p"$PlainPassword" -s 2>&1
}
else {
  $tables = echo $showTablesCmd | mysql -h $DBHost -u $DBUser -s 2>&1
}

if ($LASTEXITCODE -eq 0) {
  Write-Host "✓ Tables created:" -ForegroundColor Green
  $tables | ForEach-Object { Write-Host "  - $_" -ForegroundColor Cyan }
}
else {
  Write-Host "✗ Failed to verify tables" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Database setup completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update backend/.env with your database credentials" -ForegroundColor Cyan
Write-Host "2. Run 'npm run dev' to start the application" -ForegroundColor Cyan
Write-Host ""
