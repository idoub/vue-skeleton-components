<script>
import JCheckboxList from './components/JCheckboxList';
import JEmail from './components/JEmail';
import JPhone from './components/JPhone';
import JRadioList from './components/JRadioList';
import JText from './components/JText';
import JTextList from './components/JTextList';

export default {
  name: 'App',
  components: {
    JCheckboxList,
    JEmail,
    JPhone,
    JRadioList,
    JText,
    JTextList,
  },
  data() {
    return {
      JPhone,
      email: '',
      text: '',
      phone: '',
      phones: {
        home: '',
        work: '',
        mobile: '',
      },
      phoneOptions: [
        {
          descriptor: 'Home',
          key: 'home',
        },
        {
          descriptor: 'Work',
          key: 'work',
        },
        {
          descriptor: 'Mobile',
          key: 'mobile',
        },
      ],
      hobbies: [],
      hobbyOptions: [
        {
          descriptor: 'Snowboarding',
          key: 'snwb',
        },
        {
          descriptor: 'Skiing',
          key: 'ski',
        },
        {
          descriptor: 'Climbing',
          key: 'clmb',
        },
        {
          descriptor: 'Hiking',
          key: 'hkng',
        },
      ],
      gender: '',
      genderOptions: [
        {
          descriptor: 'Male',
          key: 'male',
        },
        {
          descriptor: 'Female',
          key: 'female',
        },
        {
          descriptor: 'Other',
          key: 'other',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <div><j-email v-model="email" descriptor="Email"></j-email></div>
    <div><j-phone v-model="phone" descriptor="Phone"></j-phone></div>
    <div><j-text v-model="text" descriptor="Text"></j-text></div>
    <div><j-checkbox-list :options="hobbyOptions" v-model="hobbies" group="hobbies"></j-checkbox-list></div>
    <div><j-radio-list :options="genderOptions" v-model="gender" group="gender"></j-radio-list></div>
    <div><j-text-list :options="phoneOptions" v-model="phones" :type="JPhone"></j-text-list></div>
  </div>
</template>
