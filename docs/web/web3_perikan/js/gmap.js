// JavaScript Document

function initialize() {
  var latlng = new google.maps.LatLng(35.668791, 139.720724);
  var myOptions = {
    zoom: 18, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}

function initialize() {
  var latlng = new google.maps.LatLng(35.710333,139.777148);
  var myOptions = {
    zoom: 18,/*拡大比率*/
    center: latlng,/*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
 
  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('images/icon_gmap.png',
    new google.maps.Size(63,70),/*アイコンサイズ設定*/
    new google.maps.Point(0,0)/*アイコン位置設定*/
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: '株式会社Lig'
  };
  var marker = new google.maps.Marker(markerOptions);
　/*アイコン設定ここまで▲*/
 
  /*取得スタイルの貼り付け*/
  var styleOptions = [
  {
    "stylers": [
    { "saturation": 0 },
    { "visibility": "simplified" },
    { "lightness": 22 },
	 { "hue": "#81c5da" }
    ]
  }
  ];
  var styledMapOptions = { name: '株式会社Lig' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);