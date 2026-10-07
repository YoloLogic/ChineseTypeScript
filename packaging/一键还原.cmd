@echo off
rem ===========================================================================
rem  One-click restore for ChineseTypeScript.
rem
rem  Undoes what  install.ps1 -AddToUserPath  did: removes this folder's bin\
rem  and node\ from the USER PATH. No file is deleted, the system PATH is never
rem  touched.
rem
rem  This file is ASCII on purpose (see the setup script for why).
rem ===========================================================================

setlocal
cd /d "%~dp0"

where powershell >nul 2>nul
if errorlevel 1 (
    echo.
    echo   PowerShell was not found on this system.
    echo.
    pause
    exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0uninstall.ps1"
set RC=%ERRORLEVEL%

echo.
if "%RC%"=="0" (
    echo   Finished.
) else (
    echo   Something went wrong ^(exit code %RC%^). Read the messages above.
)
echo.
pause
exit /b %RC%
