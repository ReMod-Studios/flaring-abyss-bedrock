set _my_datetime=%date%_%time%
set _my_datetime=%_my_datetime: =_%
set _my_datetime=%_my_datetime::=%
set _my_datetime=%_my_datetime:/=_%
set _my_datetime=%_my_datetime:.=_%

jar -cfM "flabyss-bev.mcpack" "Flabyss [Bev.]"
jar -cfM "flabyss-res.mcpack" "Flabyss [Res.]"
jar -cfM "flabyss-test-%_my_datetime%.mcaddon" "flabyss-bev.mcpack" "flabyss-res.mcpack" 

del "flabyss-bev.mcpack"
del "flabyss-res.mcpack"