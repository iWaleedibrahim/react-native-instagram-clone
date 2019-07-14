// import { database } from '../config/config'


// class FeedController extends Component {


//     loadFeed = () => {
//         var that = this;
//         // fetch recent photos first, || get them according to child 'posted'
//         database.ref('photos').orderByChild('posted').once('value')
//             .then(function (snapshot) {
//                 const exists = (snapshot.val() != null)
//                 if (exists)
//                     data = snapshot.val()
//                 var photoFeed = that.photoFeed
//                 for (photo in data) {
//                     // data object
//                     // that's how we usually acess objects response
//                     // we can build data models instead of that.
//                     var photobj = data[photo]
//                     database.ref('users').child(photobj.author).once('value')
//                         .then(function (snapshot) {
//                             const exists = (snapshot.val() != null)
//                             if (exists) {
//                                 data = snapshot.val()
//                                 photoFeed.push(
//                                     {
//                                         id: photo,
//                                         url: photobj.url,
//                                         caption: photobj.caption,
//                                         posted: photobj.posted,
//                                         author: data.username
//                                     }
//                                 );
//                             }
//                         }).catch((error) => console.log("Error1 =>", error))
//                 }
//             }).catch((error) => console.log("Error2 =>", error))
//     }

//     //  export new FeedController();
// }



