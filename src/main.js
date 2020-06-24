import $ from 'jquery';

function main() {

    //animate
    AOS.init();

    // smooth scroll
    $('.scroll').on('click', function (e) {
        const tujuan = $(this).attr('href');
        const elemenTujuan = $(tujuan);
        $('html,body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    // enter press
    // $('#search-button').on('keyup', function(e) {
    //     if(e.which === 13) {
    //         search()
    //     }
    // })
    

    // data API for ajax 
    const baseUrl ='https://api.themoviedb.org/3/movie';

    // upcoming movie for home
    $.ajax({
        url: `${baseUrl}/upcoming?`,
        type: 'get',
        dataType: 'json',
        data: {
            'api_key': '4c69d8488e01060e294622637453e829'
        }
    }).done(function (up) {
        
        let hasilupco = up.results;
        upcoming(hasilupco);
                
    })


    //upcoming movie
    $('#upcoming').on('click', function () {        
        
        $('#movie-list').html(''); 
        $.ajax({
            url: `${baseUrl}/upcoming?`,
            type: 'get',
            dataType: 'json',
            data: {
                'api_key': '4c69d8488e01060e294622637453e829'
            }
        }).done(function (up) {
            
            let hasilupco = up.results;
            upcoming(hasilupco);
                    
        })
    });
    
    
    // popular
    $('#popular').on('click', function () {

        $('#movie-list').html('');                        
        $.ajax({
            url: `${baseUrl}/popular?`,
            type: 'get',
            dataType: 'json',
            data: {
                'api_key': '4c69d8488e01060e294622637453e829',
            },
        }).done (function(pop) {
            
            let hasilpop = pop.results;
            popular(hasilpop);

        })
    })


    // top rated
    $('#top-rated').on('click', function () {

        $('#movie-list').html('');        
        $.ajax({
            url: `${baseUrl}/top_rated?`,
            type: 'get',
            dataType: 'json',
            data: {
                'api_key': '4c69d8488e01060e294622637453e829',
            },
        }).done(function(top) {

            let hasiltoprat = top.results;
            toprated(hasiltoprat);

        })
    })


    // search movie
    $('#search-button').on('click', function () {

        $('#movie-result').html('');               
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie?',
            type: 'get',
            dataType: 'json',
            data: {
                'api_key': '4c69d8488e01060e294622637453e829',
                'query': $('#search-input').val()
            },
        }).done(function(hasilsear) {
                    
            search(hasilsear);            

        })
         
    });
    //tutup ajax

    // function

    // function upcoming
    function upcoming (hasilupco) {     
            
        $.each(hasilupco, function (i, upcoming)  {
            $('#movie-list').append(`
            <style>
            .card {                    
                transition: 0.3s;
                box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
            }               
            .card:hover {
                box-shadow: 0 10px 24px 0 rgba(0,0,0,0.2);
            }
            </style>
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${upcoming.backdrop_path}" class="card-img-top" alt="image for upcoming movie">
                    <div class="card-body">
                        <p class="card-text">Title : ${upcoming.title}</p>
                        <p class="card-text">Popularity : ${upcoming.popularity}</p>                                                
                        <p class="card-text">Release date : ${upcoming.release_date}</p>                        
                    </div>
                </div>                
            </div>`
            )
        })
    }


    // function popular
    function popular (hasilpop) {
        
        $.each(hasilpop, function (i, popular) {
            $('#movie-list').append(`
            <style>
            .card {                    
                transition: 0.3s;
                box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
            }               
            .card:hover {
                box-shadow: 0 10px 24px 0 rgba(0,0,0,0.2);
            }
            </style>
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${popular.backdrop_path}" class="card-img-top" alt="image for popular movie">
                    <div class="card-body">
                        <p class="card-text">Title : ${popular.title}</p>
                        <p class="card-text">Popularity : ${popular.popularity}</p>                                                
                        <p class="card-text">Release date : ${popular.release_date}</p>                        
                    </div>
                </div>                
            </div>`
            )
        })
    }
    

    // fungsi toprated
    function toprated (hasiltoprat)  {
        
        $.each(hasiltoprat, function (i, toprated) {
            $('#movie-list').append(`
            <style>
            .card {                    
                transition: 0.3s;
                box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
            }               
            .card:hover {
                box-shadow: 0 10px 24px 0 rgba(0,0,0,0.2);
            }
            </style>
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="https://image.tmdb.org/t/p/w500${toprated.backdrop_path}" class="card-img-top" alt="image for top rated movie">
                    <div class="card-body">
                        <p class="card-text">Title : ${toprated.title}</p>
                        <p class="card-text">Popularity : ${toprated.popularity}</p>                                                
                        <p class="card-text">Release date : ${toprated.release_date}</p>                        
                    </div>
                </div>                
            </div>`
            )
        }) 
    }  
    

    // function search movie
    function search (hasilsear) {

        if (hasilsear.total_results > 0) {
            let show = hasilsear.results;                       
            $.each(show, function (i, search) {
                $('#movie-result').append(`
                    <div class="col-md-3">
                        <div class="card mb-4">
                            <img src="https://image.tmdb.org/t/p/w500${search.poster_path}" class="card-img-top" alt="image is broken">
                            <div class="card-body">
                                <p class="card-text">${search.title}</p>                                                         
                            </div>
                        </div>                
                    </div>`
                )
            })
            $('#search-input').val('');
        } else {
            $('#movie-result').html(`
                <style>
                h1 {                    
                    font-family: 'Poppins', sans-serif;  
                    font-size: 25px;
                } 
                @media (min-width: 992px) {
                    h1 {
                        font-size: 35px;        
                    }
                }                               
                </style>
                <div class="col">
                    <h1 class="text-center">movie not found !</h1>
                </div>`
            )
            $('#search-input').val('');
        }
    }           
}

export default main;