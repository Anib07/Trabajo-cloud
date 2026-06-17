@echo off

git add .
git commit -m "Modificaciones implementadas a producción"
git push origin main

docker compose up -d --build

echo Deploy completado.
pause