import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

// normal usage


export default function QuestionsBank() {
    let [optionsSubjects,setOptionsSubjects] = useState([])
    let [optionsLessons,setOptionsLessons] = useState([])
    let options1 = ['الثاني الثانوي علمي', 'الثاني الثانوي ادبي', 'الاول الثانوي']

    function optionsSelection(selected)
    {
        console.log("selected",selected)
        if(selected ==options1[0])
        {

            setOptionsSubjects(['اللغة العربية', 'اللغة الانجليزية', 'الرياضيات',"فيزياء","كيمياء"])
            console.log("0",optionsSubjects)
        }else if (selected == options1[1])
        {

           setOptionsSubjects(['اللغة العربية', 'اللغة الانجليزية', 'جغرافيا',"تاريخ","فرنسي"])
           console.log("1",optionsSubjects)
        }else
        {

            setOptionsSubjects(['اللغة العربية', 'اللغة الانجليزية', 'الرياضيات',"علوم","دراسات اجتماعية"])
            console.log("2",optionsSubjects)
        }

    }
    useEffect(()=>{
        if(optionsSubjects.includes("فيزياء"))
        {
          console.log("3lmy")
          setOptionsLessons(['درس علمي 1',"درس علمي 2"])
        }else if(optionsSubjects.includes("تاريخ"))
        {
            console.log("2dby")
          setOptionsLessons(['درس ادبي 1',"درس أدبي 2"])
        }else if(optionsSubjects.includes("علوم"))
        {
            console.log("oula")
          setOptionsLessons(['درس  1',"درس  2"])
        }
    },[optionsSubjects])
  return (
    <>
    <Dropdown
  placeholder="اختر السنة الدراسية"
  options={options1}
  onChange={(value) => optionsSelection(value.value)}
//   onSelect={(value) => console.log('selected!', value.value)} // always fires once a selection happens even if there is no change
//   onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
//   onOpen={() => console.log('open!')}
/>
    <Dropdown
    placeholder="اختر اسم المادة"
    options={optionsSubjects}
    // options={['اللغة العربية', 'اللغة الانجليزية', 'الرياضيات',"فيزياء","كيمياء"]}
    // options={['اللغة العربية', 'اللغة الانجليزية', 'جغرافيا',"تاريخ","فرنسي"]}

  />
  <Dropdown
  placeholder="اختر الدرس"
  options={optionsLessons}


/>
</>
  )
}
