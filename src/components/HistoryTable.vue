<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{'HistoryTable_Amount' | localize}}</th>
        <th>{{'HistoryTable_Date' | localize}}</th>
        <th>{{'HistoryTable_Category' | localize}}</th>
        <th>{{'HistoryTable_Type' | localize}}</th>
        <th>{{'HistoryTable_Open' | localize}}</th>
      </tr>
      </thead>

      <tbody>
      <tr 
        v-for="(record, idx) of records"
        :key="record.id"
      >
        <td>{{idx + 1}}</td>
        <td>{{record.amount | currency('RUB')}}</td>
        <td>{{record.date | date('datetime')}}</td>
        <td>{{record.categoryName}}</td>
        <td>
          <span 
            class="white-text badge"
            :class="[record.typeClass]"
          >{{record.typeText}}</span>
        </td>
        <td>
          <button 
            class="btn-small btn"
            @click="$router.push(`/detail-record/${record.id}`)"
            v-tooltip="'HistoryTable_Tooltip'"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import localizeFilter from '@/filters/localize.filters.js' 

export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  }

}
</script>

<style>

</style>
