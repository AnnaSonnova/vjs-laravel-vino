

<template>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="../../../../public/css/style.css"> -->
        <title>vino</title>
    </head>

    <body>
        <nav class="container-header">
            <div class="site-header">
                <!---------------- header et icons -------------->
                <div class="site-header-container">

                    <!-- <a href="{{ route('catalogue')}}" > -->
                    <router-link  to="welcome">
                        
                    </router-link>

                    <div class="header-icon-container">

                        <!-- <a href="{{ route('liste-bouteilles')}}"> -->
                            <router-link  to="login">
                        
                    </router-link>
                        <!-- @endguest -->

                        <label for="menu-toggle">
                            <div class="container-icon-menu ">

                                
                            </div>
                        </label>
                    </div>
                </div>

                <!--------------- barre de recherche ------------->
                <!-- <form class="search" action="{{ route('catalogue.search') }}" method="GET"> -->
                <form class="search" action="#" method="GET">
                    <!-- <input placeholder="@lang('lang.recherche_un_vin')" type="search" name="query"> -->
                    <input placeholder="recherche vin lang todo:" type="search" name="query">
                    <button type="submit" class="search-button">
                       
                </button>
            </form>

        </div>

        <!-------------- items menu-deroulant -------------->
        <input type="checkbox" id="menu-toggle" />
        <ul id="menu">

            <li class="list-item"><a href="#">Lang 1</a> </li>
            <li class="list-item"><a href="#">Lang 2</a> </li>
            <li class="list-item"><a href="#">Lang 3</a> </li>
        </ul>
    </nav>
    <router-view></router-view>
    <!-- @yield('content') -->
    <!-- 
    <script rel="text/javascript" src="{{ URL::asset('js/scripts.js') }}"></script> -->
    <!-- <script src="{{ asset('js/app.js') }}"></script> -->
    <!-- @yield( 'js' ) -->
</body>

</html>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

    name: "Header",
    components: {
        RouterView,
    },
}
</script>

<!-- <style scoped>

</style> -->