@echo off
rem ===========================================================================
rem  One-click setup for ChineseTypeScript.
rem
rem  Double-click this file. It runs install.ps1 with the execution policy
rem  bypassed for THIS process only -- nothing about your system policy changes.
rem
rem  What it will do (all of it inside this folder):
rem    * check the bundled compiler and node
rem    * write env.cmd, a window-scoped PATH setter
rem    * run the package self-test (verify.ps1) to prove it works
rem
rem  It does NOT edit your permanent PATH unless you run:
rem      powershell -File install.ps1 -AddToUserPath
rem
rem  This file is intentionally ASCII: cmd.exe reads it in the console code
rem  page (GBK on Chinese Windows), and non-ASCII here would be mangled.
rem ===========================================================================

setlocal
cd /d "%~dp0"

where powershell >nul 2>nul
if errorlevel 1 (
    echo.
    echo   PowerShell was not found on this system.
    echo   This setup needs Windows PowerShell, which ships with Windows.
    echo.
    pause
    exit /b 1
)

echo.
echo   Starting ChineseTypeScript setup...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0install.ps1"
set RC=%ERRORLEVEL%

echo.
if "%RC%"=="0" (
    echo   Setup finished successfully.
) else (
    echo   Setup reported a problem ^(exit code %RC%^).
    echo   Read the messages above.
)
echo.
pause
exit /b %RC%
