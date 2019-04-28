export default (data) => (
`<dataset>
  <h3 class="pt-3"><a href="${data.url}">${data.title_en}</a></h3>
  <p><b>Organization:</b> ${data.organization || ''}
  <br>
  <b>Theme:</b> <i>${data.category_en || ''}</i></p>
  ${data.notes_en || ''}
</dataset>`
)
