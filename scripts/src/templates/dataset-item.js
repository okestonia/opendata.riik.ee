export default (data) => (
`<dataset>
  <h3 class="pt-3"><a href="${data.url}">${data.title}</a></h3>
  <p><b>Teabevaldaja:</b> ${data.organization || ''}
  <br>
  <b>Teema:</b> <i>${data.category || ''}</i></p>
  ${data.notes || ''}
</dataset>`
)
