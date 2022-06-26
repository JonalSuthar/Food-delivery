$.ajax({
    type:'get',
    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success:function(res){
        for(var i=0;i<res.meals.length;i++){

            var newItems =`<div class = 'col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
                <p>${res.meals[i].strMeal}<p/>
                <img src = ${res.meals[i].strMealThumb} class = 'img-fluid'/>
                <p>${res.meals[i].idMeal}<p/>
            <div/>`

            $('#myItems').append(newItems)
        }
    },
    error:function(error){
        console.log(error)
    }
})