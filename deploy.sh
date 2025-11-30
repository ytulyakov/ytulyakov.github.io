rm -rf .next out
npm run build 
rm -rf docs 
mkdir docs 
cp -R out/* docs/ 
touch docs/.nojekyll
cp redirect_index.html docs/index.html
git add .
git commit -m "update"
git push