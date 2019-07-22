export default (data) => (
`<dataset>
  <h3 class="pt-3"><a href="${data.url}">${data.title}</a></h3>
  <p><b>Teabevaldaja:</b> ${data.organization || ''}
  <br>
  <b>Teema:</b> <em>${data.category || ''}</em></p>
  ${data.notes || ''}
</dataset>`
)
