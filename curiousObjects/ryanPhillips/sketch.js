const panoImage = document.querySelector('.pano-image');
const ryanPano = '../assets/terminalAtop.jpeg';

const panorama = new PANOLENS.ImagePanorama(ryanPano);
const viewer  = new PANOLENS.Viewer({
  constainer: panoImage
});

viewer.add(panorama);







// <script>
//
// const panorama = new PANOLENS.ImagePanorama( 'assets/terminalAtop.jpg' );
// const viewer = new PANOLENS.Viewer();
// viewer.add( panorama );
//
// </script>







//
// const panorama = new PANOLENS.ImagePanorama( 'assets/terminalAtop.jpg' );
// const viewer = new PANOLENS.Viewer();
// viewer.add( panorama );
//
//
//
//
//
// //
// //
// // var panorama1, panorama2, viewer;
// //
// // panorama1 = new PANOLENS.GoogleStreetviewPanorama( 'y0rbkep4RBcAAAQqZe0GiQ' );
// //
// // panorama2 = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );
// //
// // panorama3 = new PANOLENS.VideoPanorama( 'asset/textures/video/1941-battle-low.mp4' );
// //
// // viewer = new PANOLENS.Viewer();
// // viewer.add( panorama1 );
// // viewer.add( panorama2 );
// // viewer.add( panorama3 );
// //
// // // Linking between panoramas
// //
// // // Pair
// // panorama1.link( panorama2, new THREE.Vector3( -3145.23, -3704.40, 1149.48 ) );
// // panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );
// //
// // // Pair with custom scale and image
// // panorama1.link( panorama3, new THREE.Vector3( -1106.42, -4277.19, -5000.00 ), 400, 'asset/textures/1941-battle-thumb.png' );
// // panorama3.link( panorama2, new THREE.Vector3( 2092.2, -159.02, -4530.91 ) );
