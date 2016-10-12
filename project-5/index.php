<?php 
include 'functions.php';
$dir = 'assets/img/';
$images = get_images($dir);

require_once 'pagination.php' ;

?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Gallery</title>
    <!-- Import main styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
    <!--[if lt IE 10]>
<link rel="stylesheet" href="assets/css/ie.css">
<![endif]-->
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div>
                <a href="">Home</a> /
                <a href="">Catsv</a> /
                <a href="">Popular</a>
                <h3>Cute cats playing</h3>
            </div>
            <ul class="tab-menu">
                <li class="active-tab">Popular</li>
                <li>Latest</li>
                <li>Longest</li>
            </ul>
        </header>
        <main class="container">
            <ul>
            <?php if($images): $i = $start_pos+1; ?>
                <?php for($j = $start_pos; $j < $end_pos; $j++): ?>
                <li>
                    <a href=""><img src="<?= $dir . $images[$j]?>" alt=""></a>
                    <div class="delete">&#xe9ad;</div>
                    <div class="like">&#xe9da;</div>
                    <div class="annotation">
                        <div>
                            <div class="date">05.10.2016</div>
                            <a href="" class="link-youtube">youtube</a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam exercitationem reiciendis sit quaerat hic tenetur doloremque repudiandae ea fugit? Ipsam!</p>
                        <div class="tags"><a href="">cats</a>,
                            <a href="">playing</a>,
                            <a href="">cats</a>,
                            <a href="">playing</a>,
                            <a href="">cats</a>,
                            <a href="">playing</a>,
                            <a href="">cats</a>,
                            <a href="">playing</a>
                        </div>
                        <div class="chevron"></div>
                    </div>
                </li>
            <?php endfor; ?>
        <?php else: ?>
            <p>Gallery is empty</p>
        <?php endif; ?>
            </ul>
                <?php if( $count_pages > 1 ): ?>
                    <div class="pagination"><?=$pagination?></div>
                    <?php endif; ?>
        </main>
    </div>
    <!--Import jQuery-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <!-- jQuery for older IE -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Site Sripts -->
    <script src="assets/js/functions.js"></script>
</body>

</html>
