document.addEventListener('DOMContentLoaded', function() {
            // 导航菜单功能
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const nav = document.querySelector('nav');
            const menuOverlay = document.querySelector('.menu-overlay');
            const menuItems = document.querySelectorAll('.menu-item');
           
            
            // 移动端菜单处理
            if (hamburgerMenu) {
                // 确保元素存在后绑定事件
                //console.log('初始化汉堡菜单');
                
                hamburgerMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    //console.log('点击汉堡菜单');
                    
                    hamburgerMenu.classList.toggle('active');
                    nav.classList.toggle('active');
                    menuOverlay.classList.toggle('active');
                    
                    // 防止菜单打开时页面滚动
                    if (nav.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                });
            }
            
            // 点击遮罩层关闭菜单
            if (menuOverlay) {
                menuOverlay.addEventListener('click', function() {
                    hamburgerMenu.classList.remove('active');
                    nav.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
            
            // 设置当前活动菜单项
            function setActiveMenuItem(clickedItem) {
                // 移除所有菜单项的active类
                menuItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // 给被点击的菜单项添加active类
                clickedItem.classList.add('active');
            }
            
            // 点击菜单项后关闭菜单，并设置为活动状态
            if (menuItems.length > 0) {
                menuItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        // 设置当前菜单项为活动状态
                        setActiveMenuItem(this);
                        
                        // 如果是移动设备，关闭菜单
                        if (window.innerWidth <= 768) {
                            hamburgerMenu.classList.remove('active');
                            nav.classList.remove('active');
                            menuOverlay.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    });
                });
            }
            
            // 检查当前URL，设置对应的菜单项为活动状态
            function setActiveMenuByUrl() {
                const currentUrl = window.location.href;
                let activeSet = false;
                
                menuItems.forEach(item => {
                    // 获取链接的href属性
                    const href = item.getAttribute('href');
                    
                    // 检查当前URL是否匹配菜单项的href
                    if (href === '/' && (currentUrl.endsWith('/') || currentUrl.endsWith('/index.html'))) {
                        setActiveMenuItem(item);
                        activeSet = true;
                    } else if (href !== '/' && currentUrl.includes(href)) {
                        setActiveMenuItem(item);
                        activeSet = true;
                    }
                });
                
                // 如果没有找到匹配的菜单项，默认设置首页为活动
                if (!activeSet && menuItems.length > 0) {
                    const homeMenuItem = document.getElementById('nav-home');
                    if (homeMenuItem) {
                        setActiveMenuItem(homeMenuItem);
                    }
                }
            }
            
            // 初始加载时设置活动菜单
            setActiveMenuByUrl();
        });