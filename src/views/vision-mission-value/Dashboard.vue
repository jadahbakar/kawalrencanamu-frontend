<template>
  <b-card-code
    no-body
    title="Vision"
  >
    <b-table
      responsive="sm"
      :items="items"
    />
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BTable,
  },
  data() {
    return {
      items: [
        {
          vision_statement: 'Bank Terpercaya', success_indicator: 'Vision Success Indicator Phrase', objctive: 'Amount Target Vision SI Phrase', actual: 'Actual Amount Vision SI Phrase 1-1 Month M',
        },
        {
          vision_statement: 'Menjadi Kebanggaan Masyarakat', success_indicator: ' Vision Success Indicator Phrase', objctive: ' Amount Target Vision SI Phrase', actual: 'Actual Amount Vision SI Phrase 1-1 Month M',
        },
        {
          vision_statement: 'Mampu Menunjang Pembangunan Daerah', success_indicator: ' Vision Success Indicator Phrase', objctive: 'Amount Target Vision SI Phrase 3-1', actual: ' Actual Amount Vision SI Phrase 1-1 Month M',
        },
      ],
    }
  },
}
</script>

<style>

</style>
