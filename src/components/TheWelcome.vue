<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Approach</template>
    Focusing on a holistic approach to creating meaningful software, I'm
    interested in automated the testing and deployment life cycle using
    automation frameworks and pipelines in line with DevOps practices.
    <br />
    Freeing up engineers time to focus on building impactful, scalable products.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>

    Quality Engineer @ <a href="https://twobulls.com">Two Bulls</a>
    <br />
    Oct 2021 - Present
    <ul>
      <li>Build, review, and debug CI/CD pipelines</li>
      <li>Design, develop, and execute automation scripts</li>
      <li>Collaborate directly with clients</li>
      <li>Create details, comprehensive, and well-structured test plans</li>
    </ul>

    <br />

    Test Analyst @ <a href="https://nexigen.digital">Nexigen Digital</a>
    <br />
    Mar 2020 - Oct 2021
    <ul>
      <li>Managed deployment of monolithic services</li>
      <li>Trained junior Quality Assurance members</li>
      <li>Assisted with onboarding of new development members</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Connect</template>
    Emails are open at <a href="mailto:me@lmc.id.au">me@lmc.id.au</a>
    <br />
    Connect on <a href="https://www.linkedin.com/in/lukemcmahoncode/">LinkedIn</a>
  </WelcomeItem>
</template>
