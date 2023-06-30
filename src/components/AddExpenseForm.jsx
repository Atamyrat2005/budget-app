import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

// library
import { FcAddDatabase } from "react-icons/fc";

const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if(!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    })

    return (
        <div className="form-wrapper">
            <h2 className="h3">Add New{" "}<span className="accent">
                {budgets.length === 1 && `${budgets.map
                    ((budg) => budg.name)}`}
            </span>{" "}
                Expense
            </h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input type="text" name="newExpense" id="newExpense" placeholder="e.g., Coffe" ref={focusRef} required />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input type="number" step="0.01" inputMode="decimal" name="newExpenseAmount" id="newExpenseAmount" placeholder="e.g., 3.50" required />
                    </div>
                </div>
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpensebudget">Budget Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {
                            budgets.sort((a, b) => a.createdAt - b.createdAt)
                                .map((budget) => {
                                    return (
                                        <option key={budget.id} value={budget.id}>{budget.name}</option>
                                    )
                                })
                        }
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                <span>Add Expense</span><FcAddDatabase width={10} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    );
}

export default AddExpenseForm;