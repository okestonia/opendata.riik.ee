export default (data) => (
`<dataset>
  <h3 class="pt-3"><a href="${data.url_en}">${data.title_en}</a></h3>
  <p><b>Organization:</b> ${data.organization || ''}
  <br>
  <b>Theme:</b> <em>${data.category_en || ''}</em></p>
  ${data.notes_en || ''}
</dataset>`
)
