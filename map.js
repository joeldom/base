						function init_map(){
							var stylesArray = [
								{"featureType":"all","elementType":"geometry","stylers":[{"saturation":-100}]},
								{"featureType":"all","elementType":"labels.text","stylers":[{"weight":1.49},{"saturation":-100},{"lightness":28}]},
								{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
								{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"saturation":-100}]},
								{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
								{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
								{"featureType":"water","elementType":"geometry","stylers":[{"invert_lightness":true},{"lightness":66}]}
							]

							var myOptions = {
								zoom:14,
								center:new google.maps.LatLng(40.4572262, -79.97643310000001),
								mapTypeId: google.maps.MapTypeId.ROADMAP,
								mapTypeControl: false,
								scrollwheel: false,
								panControl: false,
								zoomControl: true,
								zoomControlOptions: {
									style: google.maps.MapTypeControlStyle.SMALL,
									postion: google.maps.ControlPosition.TOP_LEFT
								},
								scaleControl: true,
								overviewMapControl: false

							};
							map = new google.maps.Map(document.getElementById("sitkobrunomap"), myOptions);
							map.setOptions({styles: stylesArray});
							var pinLocation = new google.maps.LatLng(40.4572262, -79.97643310000001)
							marker = new google.maps.Marker({
								map: map,
								position: pinLocation,
								//icon: "http://sb.linux.1903host.com/wp-content/themes/sitkobruno/imgs/sb-pin-shad.png"
							});
							var contentString = '<b>Sitko Bruno</b><br/>2740 Smallman Street Suite 300 15222 Pittsburgh';
							var infowindow = new google.maps.InfoWindow({ content: contentString });
							google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});}
							google.maps.event.addDomListener(window, 'load', init_map);
