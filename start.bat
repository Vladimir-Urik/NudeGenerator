echo off
cls
title NudeGenerator

:Ask
echo [1] Install Modules
echo [2] Launch The Gen
set p = ""
set /P p=Type What Do You Want To Do (1/2): %=%
If /I "%p%" == "1" goto module
If /I "%p%" == "2" goto launch
pause


:launch
node index
pause


:module
npm i
goto launch