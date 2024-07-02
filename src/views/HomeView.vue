<template>
  <div class="container-fluid">
    <section class="row" id="landing">
      <LandingSection/>

    </section>
    <section class="row" id="about">
      <AboutSection/>

    </section>
    <section class="row" id="education">
      <EducationSection/>
    </section>

    <section class="row" id="resume">
      <SkillsSection/>
    </section>

    <section class="row" id="project">
      <ProjectsSection/>

    </section>
    <section class="row" id="testimonials">
      
    </section>
    <section class="row" id="reachMe"></section>
    
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    SkillsSection,
    ProjectsSection
   
   
  }
}
</script>