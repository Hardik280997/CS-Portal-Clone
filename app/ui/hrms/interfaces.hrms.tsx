export interface GridModuleType {
    moduleName: string,
    columns: string[],
    priority: number
}

export interface GridTabType {
    tabName: string,
    modules: GridModuleType[]
}

export interface LeaveDateType {
    from: string,
    to: string
}

export interface LeaveDaysInfoType {
    total_days: number,
    club?: string
}
export interface LeaveDetailType {
    id: number,
    emp_id: number,
    emp_name: string,
    reporting_to: string,
    leave_type: string,
    leave_date: LeaveDateType,
    days_info: LeaveDaysInfoType,
    leave_added: string,
    status: string
}

export interface WfhDateType {
    from: string,
    to: string
}

export interface WfhDaysInfoType {
    total_days: number,
    club?: string
}

export interface WfhDetailType {
    id: number,
    emp_id: number,
    emp_name: string,
    reporting_to: string,
    wfh_date: WfhDateType,
    days_info: WfhDaysInfoType,
    status: string
}

export interface AssistanceDetailType {
    ticket_id: number,
    title: string,
    status: string,
    created_date: string,
    resolution_date: string,
    rating: number
}


export interface AppraisalPeriodType {
    from: string,
    to: string
}

export interface AppraisalsDetailType {
    id: number,
    emp_id: number,
    name: string,
    reporting_tl: string,
    appraisal_period: AppraisalPeriodType,
    by_employee: string,
    by_manager: string,
    status: string
    assigned_to: string
}

export interface ReferralDetailType {
    id: number,
    sr_no: number,
    referred_candidate: string,
    job_title: string,
    status: string,
    bonus_status: string,
    created_on: string
}

export interface UsersDetailType {
    id: number,
    emp_id: string,
    name: string,
    email_id: string,
    contact_no: string,
    company_name: string,
    reorting_to: string
}

export interface PoliciesTabType {
    tabName: string,
    policies: string[]
}

export interface CountDataType {
    all: number,
    pending?: number,
    approved?: number,
    rejected?: number
    hr_review?: number
    open?: number
    in_progress?: number
    closed?: number
    [key: string]: number | undefined
}