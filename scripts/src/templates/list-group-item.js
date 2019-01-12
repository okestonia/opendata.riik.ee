export default (data) => (
`<a href="${data.url}" class="list-group-item d-flex justify-content-between align-items-center list-group-item-action${data.selected ? ' active ' : ''}">
  <span class="list-group-item-truncate">${data.title}</span>
  <span class="badge badge-primary badge-pill">${data.count}</span>
  ${data.selected ? '<span class="badge badge-primary badge-pill"><i class="fa fa-times"></i></span>' : ''}
</a>`
)
