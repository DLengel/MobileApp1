package com.tns.gen.java.lang;

public class Object_picker_16_32_TimeChangedListenerImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.widget.TimePicker.OnTimeChangedListener {
	public Object_picker_16_32_TimeChangedListenerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onTimeChanged(android.widget.TimePicker param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onTimeChanged", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
