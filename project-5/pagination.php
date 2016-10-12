<?php

/*
-------------------пагинация---------------------*/
// кол-во фото на страницу
if( isset($_GET['perpage']) ){
	$perpage = (int)$_GET['perpage'];
}else{
	$perpage = 8;;
}
// общее кол-во фото
$count_img = count($images);
// необходимое кол-во страниц
$count_pages = ceil($count_img / $perpage);
// если число страниц равно 0
if(!$count_pages) $count_pages = 1;
// получаем номер страницы
if( isset($_GET['page']) ){
	$page = (int)$_GET['page'];
	if( $page < 0 ) $page = 1;
}else{
	$page = 1;
}
// если запрошенная страница больше максимума
if( $page > $count_pages ) $page = $count_pages;

// первая картинка на страницу
$start_pos = ($page - 1) * $perpage;
// последняя картинка на страницу
$end_pos = $start_pos + $perpage;
// если последняя картинка больше максимума картинок
if( $end_pos > $count_img ) $end_pos = $count_img;

// получаем пагинацию
$pagination = pagination($page, $count_pages);