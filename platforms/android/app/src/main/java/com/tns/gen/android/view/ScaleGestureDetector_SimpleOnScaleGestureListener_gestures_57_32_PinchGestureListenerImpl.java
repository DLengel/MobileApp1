package com.tns.gen.android.view;

public class ScaleGestureDetector_SimpleOnScaleGestureListener_gestures_57_32_PinchGestureListenerImpl extends android.view.ScaleGestureDetector.SimpleOnScaleGestureListener implements com.tns.NativeScriptHashCodeProvider {
	public ScaleGestureDetector_SimpleOnScaleGestureListener_gestures_57_32_PinchGestureListenerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public boolean onScaleBegin(android.view.ScaleGestureDetector param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onScaleBegin", boolean.class, args);
	}

	public boolean onScale(android.view.ScaleGestureDetector param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onScale", boolean.class, args);
	}

	public void onScaleEnd(android.view.ScaleGestureDetector param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onScaleEnd", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
