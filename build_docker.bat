set /p "TAG_VERSION=Enter TAG version number: "
set CONTAINER_NAME=visited_places
set REPOSITORY=abdarum/visited_places

docker build -t %CONTAINER_NAME% .
docker commit %CONTAINER_NAME%

docker images -a
set /p "IMAGE_ID=Enter IMAGE ID: "

docker tag %IMAGE_ID% %REPOSITORY%
docker tag %IMAGE_ID% %REPOSITORY%:%TAG_VERSION%

docker image push %REPOSITORY%
docker image push %REPOSITORY%:%TAG_VERSION%
