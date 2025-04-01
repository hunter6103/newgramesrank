<?php
// 获取当前页面路径，用于设置活动导航项
$current_path = $_SERVER['REQUEST_URI'];
$is_home = $current_path == '/' || $current_path == '/index.php';
$is_games = strpos($current_path, '/games/') !== false;
?>
<header>
    <img src="/logo.png" alt="网站LOGO">
    <h1>小游戏网站</h1>
</header>

<nav>
    <ul>
        <li><a href="/" id="nav-home" <?php echo $is_home ? 'class="active"' : ''; ?>>首页</a></li>
        <li><a href="/#games" id="nav-games" <?php echo $is_games ? 'class="active"' : ''; ?>>游戏</a></li>
        <li><a href="/#popular" id="nav-popular">热门</a></li>
        <li><a href="/#contact" id="nav-contact">联系我们</a></li>
    </ul>
</nav> 