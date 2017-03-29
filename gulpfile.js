const gulp= require('gulp');
gulp.task('proyect',()=>
         gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
          .pipe(plugin1)
          .pipe(plugin2)
          .pipe(plugin3)
          .pipe(plugin.dest('index.html'))
);

gulp.task('proyect'.() =>{
    gulp.watch('index.html', ['proyect'])
};
