//방명록 등록 post /visitor
const form = document.forms["visitor-form"];
async function createVisitor() {
  const form = document.forms["visitor-form"];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록 모두를 기입하여야 합니다.");
    return;
  } else if (form.name.value.length > 6) {
    alert("이름은 6글자 이하");
    return;
  }

  const data = {
    name: form.name.value,
    comment: form.comment.value,
  };

  const res = await axios({
    method: "post",
    url: "/visitors",
    data: data,
  });
  //   const { visiData } = res;
  //   const html = `
  //         <tr>
  //           <td>${visiData.id}</td>
  //           <td>${visiData.name}</td>
  //           <td>${visiData.comment}</td>
  //           <td>
  //             <button type="button" onclick="editVistiter(${visiData.id})">수정</button>
  //           </td>
  //           <td>
  //             <button type="button"  onclick="deleteVisitor(${visiData.id})">삭제</button>
  //           </td>
  //         </tr>
  //   `;
    location.reload();

}
//방명록 삭제 delete /visitor
function deleteVisitor(btn, id) {
  axios({
    method: "delete",
    url: "/visitors",
    data: { id: id },
  });
  location.reload();
}

//방명록 수정 patch /visitor

async function editVistitor(id) {
  const btngroup = document.getElementById("btn-group");

  // axios({
  //   method:'patch',
  //   url:'/visitors',
  //   data:{id:id}
  // })
  const res = await axios({
    method: "get",
    url: `/visitor/${id}`,
  });
  const html = `
          <button type="button" onclick="editDo(${id})">수정</button>
          <button type="button" onclick="editCancel()">취소</button>

  `;
  form.name.value = res.data.name;
  form.comment.value = res.data.comment;
  btngroup.innerHTML = html;
}

async function editDo(id) {
  const form = document.forms["visitor-form"];
  const res = await axios({
    url: "/visitors",
    method: "patch",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  });
  location.reload();
}

function editCancel(){
    location.reload();

}