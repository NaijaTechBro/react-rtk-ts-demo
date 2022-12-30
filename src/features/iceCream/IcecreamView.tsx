import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './iceCreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useAppDispatch()
  return (
    <div>
    <h2>Number of  icecream - {numOfIcecreams}</h2>
    <button
    onClick={() => dispatch(ordered())}
    >Order icecream</button>
    <button
    onClick={() => dispatch(restocked(value))}
    >Restocked icecream</button>
    <input
    type='number'
    value={value}
    onChange={(e) => setValue(parseInt(e.target.value))}
    />
</div>
  )
}
