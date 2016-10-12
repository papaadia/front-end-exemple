<?php

include 'functions.php';
$dir = 'assets/img/';
$images = get_images($dir);

require_once 'pagination.php' ;


// формирование + вывод
if($images): $i = $start_pos+1; $output = null;
	$output .= '<ul>';
	for($j = $start_pos; $j < $end_pos; $j++):
		$output .= '<li>';
		$output .= 		'<a href=""><img src=' .$dir . $images[$j]. ' alt=""></a>';
		$output .= 		'<div class="delete">&#xe9ad;</div>';
		$output .= 		'<div class="like">&#xe9da;</div>';
		$output .= 		'<div class="annotation">';
		$output .= 			'<div>';
		$output .= 				'<div class="date">05.10.2016</div>';
		$output .= 				'<a href="" class="link-youtube">youtube</a>';
		$output .= 			'</div>';
		$output .= 		'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam exercitationem reiciendis sit quaerat hic tenetur doloremque repudiandae ea fugit? Ipsam!</p>';
		$output .= 			'<div class="tags"><a href="">cats</a>,';
		$output .= 				'<a href="">playing</a>, ';
		$output .= 				'<a href="">cats</a>, ';
		$output .= 				'<a href="">playing</a>, ';
		$output .= 				'<a href="">cats</a>, ';
		$output .= 				'<a href="">playing</a>, ';
		$output .= 				'<a href="">cats</a>, ';
		$output .= 				'<a href="">playing</a> ';
		$output .= 			'</div>';
		$output .= 				'<div class="chevron"></div>';
		$output .= 		'</div>';
		$output .= '</li>';
	$i++; endfor;
	$output .= '</ul>';
endif;

echo $output . '<div class="pagination">' .$pagination. '</div>';

