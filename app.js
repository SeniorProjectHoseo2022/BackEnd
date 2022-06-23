const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router
const indexRouter = require('./routes/index');
const testRouter = require('./routes/test');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');
const chatRouter = require('./routes/chat');
const groupRouter = require('./routes/group');
const fsRouter = require('./routes/fs');
const commentRouter = require('./routes/comment');
const like_logRouter = require('./routes/like_log');
app.use('/', indexRouter);

app.use('/test', testRouter);
app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/chat', chatRouter);
app.use('/group', groupRouter);
app.use('/fs', fsRouter);
app.use('/comment', commentRouter);
app.use('/like_log', like_logRouter);
//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
