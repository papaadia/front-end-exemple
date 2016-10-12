<?php 
//Сбор картинок 
function get_images($dir){
	@$files = scandir($dir);
	if(!$files) return false;
	//Проверка корректности ввода
	$pattern = "#\.(jpe?g|png|gif)$#i";
	foreach($files as $key => $file){
		if(!preg_match($pattern, $file)){
			unset($files[$key]);
		}
	}
	$files = array_merge($files);
	return $files;
}


//Постраничная навигация

function pagination($page, $count_pages){


	$back = null; // ссылка НАЗАД
	$forward = null; // ссылка ВПЕРЕД
	$startpage = null; // ссылка на первую страницу
	$endpage = null; // ссылка на последнюю страницу
	$page3left = null; // троеточие назад
	$page1left = null; // первая страница слева
	$page3right = null; // троеточие вперед
	$page1right = null; // первая страница справа


	if( $page > 1 ){
		$back = "<a class='nav-link page-back' data-page='" .($page-1). "' href=''>&lt;</a>";
	}
	if( $page < $count_pages ){
		$forward = "<a class='nav-link page-forward' data-page='" .($page+1). "' href=''>&gt;</a>";
	}
	if( $page > 2 ){
		$startpage = "<a class='nav-link' data-page='1' href=''>1</a>";
	}
	if( $page < ($count_pages - 2) ){
		$endpage = "<a class='nav-link' data-page='" .$count_pages. "' href=''>".$count_pages."</a>";
	}
	if( $page - 3 > 0 ){
		$page3left = "<a class='nav-link' data-page='" .($page-3). "' href=''>...</a>";
	}
	if( $page - 1 > 0 ){
		$page1left = "<a class='nav-link' data-page='" .($page-1). "' href=''>" .($page-1). "</a>";
	}
	if( $page + 1 <= $count_pages ){
		$page1right = "<a class='nav-link' data-page='" .($page+1). "' href=''>" .($page+1). "</a>";
	}
	if( $page + 3 <= $count_pages ){
		$page3right = "<a class='nav-link' data-page='" .($page+3). "' href=''>...</a>";
	}

	return $startpage.$page3left.$page1left.'<a class="nav-active">'.$page.'</a>'.$page1right.$page3right.$endpage.$back.$forward;
}

?>