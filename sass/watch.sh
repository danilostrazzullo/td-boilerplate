# COMPILE GLOBAL STYLESHEET

# No minification
sass --watch global.scss:../css/global.css --style expanded -r ./timestamp.rb

# Use compressed version in production
#sass --watch global.scss:../css/global.min.css --style compressed -r ./timestamp.rb

exit 0