import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://yakuphantonintshi.github.io/vueData/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    softskills: null,
    testimonial: null,
    projects: null

  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setSoftskills(state, value){
      state.softskills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    }
  },
  actions: {
    async fetchJobTitle(context){
      try{
        let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle", jobTitle)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the job title",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context){
      try{
        let {about} = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch about data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context){
      try{
        let {education} = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch education data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context){
      try{
        let {skills} = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the skill data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSoftskills(context){
      try{
        let {softskills} = await (await axios.get(portfolioURL)).data
        context.commit("setSoftskills", softskills)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch the skill data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchTestimonials(context){
      try{
        let {testimonials} = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch testimonial data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProjects(context){
      try{
        let {projects} = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)
      } catch(e){
        Swal.fire({
          title: "Error",
          text: "Failed to fetch project data",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})