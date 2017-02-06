var forEach = function(arr, func){
 for(var i = 0 ; i < arr.length; i++){
  func(arr[i], i, arr)
 }
}

console.log($)
console.log("YOO")


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  console.log(serverRes.results)


  var congressContainerEl = document.querySelector('.congress-container');
  var legislatorsObjectsList=serverRes.results;

  var bigString="";

  forEach(legislatorsObjectsList, function(oneLegislatorObj, index, theArray){
  		// console.log( oneLegislatorObj.first_name)
      var name= oneLegislatorObj.first_name +" " +oneLegislatorObj.last_name
      var party= oneLegislatorObj.party
      var title=oneLegislatorObj.title + "--" + party + "-" + oneLegislatorObj.state_name

      var className= "<div class=one-person>"
      var heading= "<div class='leg-heading'>"
      heading+= "<h3>" + name + "</h3>" + "<h4>" + title + "</h4>" + "</div>"

      var unorderedList= "<ul class= 'list'>"
      unorderedList+= "<li>" + "email:" + oneLegislatorObj.oc_email + "</li>"
      unorderedList+= "<li>" + "website:" + oneLegislatorObj.website + "</li>"
      unorderedList+= "<li>" + "facebook:" + oneLegislatorObj.facebook_id + "</li>"
      unorderedList+= "<li>" + "twitter:" + oneLegislatorObj.twitter_id + "</li>" + "</ul>"

      var footer= "<h7>" + "Term End" + oneLegislatorObj.term_end + "</h7>"

      bigString+= className + heading + unorderedList + footer + "</div>"
    })

    congressContainerEl.innerHTML=bigString;
})
