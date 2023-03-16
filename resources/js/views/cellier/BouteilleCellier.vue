
<template>

<div class="liste-container">
  
    <!-- search bar -->
    
  <!-- wine list -->
  <div class="container">
  
      
      <div class="card" >
          <div class="card-body">
              <img src="" alt="nom">
              <picture class="modal"><img src="" alt="img"></picture>
              <div class="card-info">
                  <div class="card-info-title">
                      <h3 class="card-title">Nom</h3>
                      <p class="card-subtitle">White wine Format</p>
                      <p class="card-subtitle">Pays</p>
                  </div>
                  <div class="card-info-client">
                      <p class="card-count">Prix :  $</p>
                      <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                      <div class="card-footer">
                        <button  class="card-btn_add " value="">+</button>   
                       
                  </div>
                  </div>  
              </div> 
    
          </div>
          
              
      </div>
      
      <div class="catalogue-container">
          <ul>
              <li class="text-danger">Aucune bouteilles disponible dans le cellier</li>
          </ul>
      </div>
      
  
    </div>
  
  </div>
</template>

<script>
export default {
    name: "login",
}
</script> 