// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    backgroundColor:'#F00',
    left: 0,
    top: 0,
    zIndex: 0
});

//41.381574, 2.18536
var mountainView = Titanium.Map.createAnnotation({
    latitude:41.381574,
    longitude:2.18536,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: 'app://images/KS_nav_views.png',
    myid:1,
    layarName: "default",
    layarType: Titanium.Map.MAP_LAYAR_TYPE_DEFAULT
});


var polyOne = Titanium.Map.createAnnotation({
    latitude:41.381083,
    longitude:2.18185,
    title:"PolyOne",
    subtitle:'IndexVentures - Sector 12',
    animate:false,
    leftButton: 'app://buttons/medium-green-round-building.png',
    myid:11, 
    points: {
		data:[
		      {latitude:41.381083, longitude:2.18185},
		      {latitude:41.381582, longitude:2.18042},
		      {latitude:41.382323, longitude:2.18094},
		      {latitude:41.382637, longitude:2.18119},
		      {latitude:41.382532, longitude:2.18166},
		      {latitude:41.382363, longitude:2.18226},
		      {latitude:41.381719, longitude:2.18177},
		      {latitude:41.381389, longitude:2.18213},
		     ],
		lineColor: "#ff669900",
		lineWidth: 1,
		antiAlias: true,
		fillColor: "#80669900",
		complete: true
	},
    layarType: Titanium.Map.MAP_LAYAR_TYPE_POLYGON,
    layarName: "poly"
})

var polyTwo = Titanium.Map.createAnnotation({
    latitude:41.380133,
    longitude:2.18962,
    title:"Index",
    subtitle:'IndexVentures - Sector 32',
    animate:false,
    leftButton: 'app://buttons/medium-green-round-building.png',
    myid:10, 
    points: {
		data:[
		      {longitude:2.18962,latitude:41.380133},
		      {longitude:2.18905,latitude:41.381743},
		      {longitude:2.19134,latitude:41.382267},
		      {longitude:2.19198,latitude:41.380624},
		     ],
		lineColor: "#ff669900",
		lineWidth: 1,
		antiAlias: true,
		fillColor: "#80669900",
		complete: true
	},
    layarType: Titanium.Map.MAP_LAYAR_TYPE_POLYGON,
    layarName: "poly"
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:41.381083, longitude:2.18185, 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView, polyOne],
    hideLayers: [],
    zIndex:10
});
 
win.add(mapview);


win.open();


