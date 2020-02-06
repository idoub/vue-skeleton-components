<script>
import JCheckboxList from './components/JCheckboxList';
import JDropdown from './components/JDropdown';
import JEmail from './components/JEmail';
import JPhone from './components/JPhone';
import JRadioList from './components/JRadioList';
import JText from './components/JText';
import JTextList from './components/JTextList';

export default {
  name: 'App',
  components: {
    JCheckboxList,
    JDropdown,
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
      phoneOptions: {
        home: 'Home',
        work: 'Work',
        mobile: 'Mobile',
      },
      hobbies: [],
      hobbyOptions: {
        snwb: 'Snowboarding',
        ski: 'Skiing',
        clmb: 'Climbing',
        hkng: 'Hiking',
      },
      gender: '',
      genderOptions: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
      },
      car: '',
      carOptions: {
        ford: 'Ford',
        gm: 'General Motors',
        toyota: 'Toyota',
        honda: 'Honda',
        hyundai: 'Hyundai',
      },
    };
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
    <div><j-dropdown :options="carOptions" v-model="car" group="car"></j-dropdown></div>
  </div>
</template>
