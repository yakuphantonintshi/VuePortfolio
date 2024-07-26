<template>
    <div class="container-fluid">
      <div class="row">
             <h1 class="projects">Projects</h1>
              <div class="row gap-1 justify-content-center" v-if="projects?.length" wrapper>
              <Card v-for="product in projects" :key="product.id" id="card">
                  <template #cardHeader>
                        <h2>{{ product.projectName }}</h2>
                        <img :src="product.image" :alt="product.projectName" loading="lazy" class="img-fluid" id="cardImg">
                  </template>
                  <template #cardBody>
                      <h5 class="card-title">{{ product.description }}</h5>
                      <a :href="product.github" class="btn btn-dark" target="_blank"><i class="bi bi-github"></i></a>
                      <a :href="product.vercel" class="btn btn-dark" target="_blank">Vercel Link</a>
                     
                  </template>
              </Card>
          </div>
          <div v-else class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
              </div>
          </div>
      </div>
  
    </div>
    
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  export default {
      components: {
          Card
      },
      computed: {
          projects() {
              return this.$store.state.projects
          }
      },
      mounted() {
          this.$store.dispatch('fetchProjects')
      },
     
  }
  </script>

  <style scoped>
  img{
    width: 350px;
    height: 350px;
     object-fit: contain;
    object-position: center;
  }
  h1{
    color: #51c4df;
}
.projects{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
    display: grid;
    grid-template-rows: repeat (3, 1fr );
}
a{
    background-image: linear-gradient(to right, #002231, #51c4df);
    color: #51c4df;
    width: 200px;
    font-size: 1.5rem;
    transition: width 2s;
    margin-inline: 5px;
}
a:hover{
    color: white;
    width: 150px;
}
#card{
    background-image: linear-gradient(#002231, #51c4df,#002231, #51c4df);
    margin: 50px;
    border: 2px solid #51c4df;
}
h2{
    
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    text-decoration: underline;
    padding-bottom: 2rem; 

}
.card-title{
    color: white;
    font-size: 25px;
}
.card{
    display: grid;
    grid-template-rows: repeat (3, 1fr);
}
.btn{
    margin-top: 60px;
    border: 2px solid #51c4df;
}

  </style>