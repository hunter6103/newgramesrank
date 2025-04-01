const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由处理
app.get('/', (req, res) => {
    res.render('index', {
        currentPath: req.path
    });
});

app.get('/games/:gameName', (req, res) => {
    const gameName = req.params.gameName;
    res.render('games/game-detail', {
        currentPath: req.path,
        game: {
            name: gameName.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            // 这里可以根据游戏名称获取具体游戏信息
        }
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 