import { ReactNode } from "react";
import { Dayjs } from "dayjs";


export type TStep = 1 | 2 | 3 | 4 | 5

export type TFieldDataChildSize = Record<'weight' | 'height' | 'weightUnit' | 'heightUnit', TSelectItem>

export type TSelectItem = {
   icon?: ReactNode
   title: string
   value: string | number
}


export type TFormInitialStateStep1 = {
   name: string,
   birthDate: Dayjs | string,
   isShowBornWeek: 0 | 1,
   bornWeek: number,
   weight: string,
   height: string,
   weightUnit: string,
   heightUnit: string,
   email: string,
   phoneCode: string,
   phoneNumber: string
}

export type TFormDataWithPhone = Omit<TFormInitialStateStep1, 'phoneCode' | 'phoneNumber' | 'isShowBornWeek'> & {
   phone: string
}

export type TFormDataWithPhoneStep1 = TFormDataWithPhone | Omit<TFormDataWithPhone, 'bornWeek'>

export type TFormStep4 = {
   appointmentDate: Dayjs | string,
   appointmentTime: string,
   slotTime: string,
   callType: TCallType
}

export type TCallType = '' | 'video' | 'audio'

export type TOrder = TFormDataWithPhoneStep1 & Partial<TFormStep4>

export type TOrdersContext = { order: TOrder, setOrder: ( data: TOrder ) => void }

export type TAppointment = string