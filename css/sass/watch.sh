# COMPILE GLOBAL STYLESHEET

# No minification
#sass --watch global.scss:../global.css --style expanded

sass --watch global.scss:../global.min.css --style compressed

exit 0